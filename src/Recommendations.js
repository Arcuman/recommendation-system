// src/Recommendations.js
import React, { useState, useEffect } from "react";

const Recommendations = ({ history }) => {
  const [recommendations, setRecommendations] = useState([]);

  // Simulate fetching recommendations based on user history
  useEffect(() => {
    const fetchRecommendations = async () => {
      // Simulating an API call to fetch recommendations
      const mockRecommendations = generateRecommendations(history);
      setRecommendations(mockRecommendations);
    };

    fetchRecommendations();
  }, [history]);

  // Simulating recommendation generation based on user history
  const generateRecommendations = (history) => {
    return history.map((item) => `${item} - Recommended`);
  };

  return (
    <div>
      <h2>Recommendations for you:</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
