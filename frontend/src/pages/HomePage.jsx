import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="activity-panel">
        <div className="activity-title">My Activity</div>
        <div className="activity-subtitle">This month</div>

        <div className="activity-card blue">
          <div className="activity-header">GenZ</div>
          <div className="activity-name">Lorem Ipsum</div>
          <p className="activity-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div className="activity-card yellow">
          <div className="activity-header">Corporate</div>
          <div className="activity-name">Lorem Ipsum</div>
          <p className="activity-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div className="activity-card red">
          <div className="activity-header">CS</div>
          <div className="activity-name">Lorem Ipsum</div>
          <p className="activity-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>
      </div>

      <div className="user-info">
        <img className="user-avatar" src="https://placehold.co/57x58" alt="User" />
        <div className="user-details">
          <div className="user-name">User 1</div>
          <div className="user-role">Student</div>
        </div>
      </div>

      <div className="menu">
        <div className="menu-item active">Home</div>
        <div className="menu-item">Flashcards</div>
        <div className="menu-item">Quizzes</div>
        <div className="menu-item">Discussion Board</div>
      </div>

      <div className="goals-panel">
        <div className="goals-title">Your Goals</div>
        <div className="goals-subtitle">This week</div>

        <div className="goal-day">Monday</div>
        <div className="goal-day">Tuesday</div>
        <div className="goal-day">Wednesday</div>
        <div className="goal-day">Thursday</div>
        <div className="goal-day">Friday</div>
        <div className="goal-day">Saturday</div>
      </div>
    </div>
  );
};

export default HomePage;
