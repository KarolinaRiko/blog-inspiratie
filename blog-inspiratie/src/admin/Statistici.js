import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line} from "recharts";

function Statistici() {
  const [stats, setStats] = useState({
    recipesCount: 0,
    fitnessCount: 0,
    booksCount: 0,
    usersCount: 0,
    recentExercise: null,
    mostCommented: null,
    activeUsers: 0,
    usersActiveTrend: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      const recipesSnap = await getDocs(collection(db, "recipes"));
      const recipes = recipesSnap.docs.map(doc => doc.data());

      const fitnessSnap = await getDocs(collection(db, "fitness"));
      const fitness = fitnessSnap.docs.map(doc => doc.data());

      const booksSnap = await getDocs(collection(db, "books"));
      const books = booksSnap.docs.map(doc => doc.data());

      const usersSnap = await getDocs(collection(db, "users"));
      const commentsSnap = await getDocs(collection(db, "comments"));
      const comments = commentsSnap.docs.map(doc => doc.data());

      const recentExercise = fitness.at(-1);

      const countCommentsPerSlug = {};
      comments.forEach(comment => {
        countCommentsPerSlug[comment.postId] = (countCommentsPerSlug[comment.postId] || 0) + 1;
      });

      let mostCommentedSlug = null;
      let maxComments = 0;
      for (const [postId, count] of Object.entries(countCommentsPerSlug)) {
        if (count > maxComments) {
          maxComments = count;
          mostCommentedSlug = postId;
        }
      }

      const activeUsers = new Set(comments.map(c => c.email)).size;

      const activeUsersTrend = Array.from({ length: 12 }, (_, i) => ({
        month: `Luna ${i + 1}`,
        activeUsers: Math.floor(Math.random() * 100), 
      }));

      setStats({
        recipesCount: recipes.length,
        fitnessCount: fitness.length,
        booksCount: books.length,
        usersCount: usersSnap.size,
        recentExercise,
        mostCommented: mostCommentedSlug,
        activeUsers,
        usersActiveTrend: activeUsersTrend,
      });
    };

    fetchStats();
  }, []);

  const chartData = [
    { name: "Rețete", value: stats.recipesCount },
    { name: "Exerciții", value: stats.fitnessCount },
    { name: "Cărți", value: stats.booksCount },
  ];

  const userData = [
    { name: "Total", value: stats.usersCount },
    { name: "Activi", value: stats.activeUsers },
  ];

  const activeUsersTrendData = stats.usersActiveTrend;

  const colors = ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"];

  return (
    <div className="stats-container">
      <h2 className="stats-title">📊 Statistici Admin</h2>

      <div className="stats-grid">
        <div className="stat-card">👤 Utilizatori: <span>{stats.usersCount}</span></div>
        <div className="stat-card">💬 Utilizatori activi: <span>{stats.activeUsers}</span></div>
        <div className="stat-card">🆕 Exercițiul recent: <span>{stats.recentExercise?.title || "-"}</span></div>
        <div className="stat-card">⭐ Best articol: <span>{stats.mostCommented || "-"}</span></div>
      </div>

      <div className="charts-section">
        <h3>Distribuție conținut</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#7b0f41" />
          </BarChart>
        </ResponsiveContainer>

        <h3>Statistici utilizatori</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={userData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {userData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <h3>Trendul utilizatorilor activi</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activeUsersTrendData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Statistici;
