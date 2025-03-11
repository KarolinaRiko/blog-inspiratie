const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
const db = admin.firestore();

// Configurare nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "riaboconi.k@gmail.com",
    pass: "gwpe yiec orss zqmy", // Folosește parola generată
  },
});

// Funcție care trimite emailuri când apare un articol nou
exports.sendNewsletter = functions.firestore
  .document("articles/{articleId}")
  .onCreate(async (snapshot, context) => {
    const newArticle = snapshot.data();
    const subscribers = await db.collection("subscribers").limit(100).get();
    const emails = subscribers.docs.map((doc) => doc.data().email);

    // Trimite emailuri în loturi de 50 pentru a nu depăși limitele Gmail
    const batchSize = 50;
    for (let i = 0; i < emails.length; i += batchSize) {
      const batchEmails = emails.slice(i, i + batchSize);
      const mailOptions = {
        from: "riaboconi.k@gmail.com",
        bcc: batchEmails,
        subject: `Nou articol: ${newArticle.title}`,
        text: `Salut! A apărut un nou articol pe blog: ${newArticle.title}\n\n${newArticle.link}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Emailuri trimise pentru articolul ${newArticle.title}`);
      } catch (error) {
        console.error("Eroare la trimiterea emailurilor:", error);
      }
    }
  });
