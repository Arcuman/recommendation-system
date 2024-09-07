// src/AdminPage.js
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const transactionsData = {
  users: [
    {
      userId: 1,
      name: "Alice",
      transactions: [
        { transactionId: "T001", item: "Dog Food", amount: 50, date: "2024-09-01" },
        { transactionId: "T002", item: "Cat Toy", amount: 15, date: "2024-09-03" },
        { transactionId: "T022", item: "Mody Dick", amount: 15, date: "2024-09-03" },
        { transactionId: "T007", item: "Pet Paradise Hostel", amount: 0, date: "2024-09-06" },
        { transactionId: "T017", item: "Brew & Beans Coffee Shop", amount: 0, date: "2024-09-06" },
        { transactionId: "T027", item: "Caffeine Haven", amount: 0, date: "2024-09-06" }
      ]
    },
    {
      userId: 2,
      name: "Bob",
      transactions: [
        { transactionId: "T003", item: "Bird Cage", amount: 75, date: "2024-09-02" },
        { transactionId: "T004", item: "Fish Tank", amount: 120, date: "2024-09-04" },
        { transactionId: "T110", item: "Varka", amount: 30, date: "2024-09-05" },
        { transactionId: "T110", item: "Varka", amount: 30, date: "2024-09-05" },
        { transactionId: "T008", item: "Pet Paradise Hostel", amount: 0, date: "2024-09-06" },
        { transactionId: "T037", item: "Brew & Beans Coffee Shop", amount: 0, date: "2024-09-06" }
      ]
    },
    {
      userId: 3,
      name: "Charlie",
      transactions: [
        { transactionId: "T005", item: "Rabbit Hutch", amount: 60, date: "2024-09-03" },
        { transactionId: "T006", item: "Hamster Wheel", amount: 25, date: "2024-09-05" },
        { transactionId: "T007", item: "Pet Paradise Hostel", amount: 0, date: "2024-09-06" },
        { transactionId: "T027", item: "Brew & Beans Coffee Shop", amount: 0, date: "2024-09-06" },
        { transactionId: "T027", item: "Caffeine Haven", amount: 0, date: "2024-09-06" }
      ]
    },
    {
      userId: 4,
      name: "Anton Borisov",
      transactions: [
        { transactionId: "T009", item: "Business Trip Ticket", amount: 300, date: "2024-09-04" },
        { transactionId: "T010", item: "Dog Leash", amount: 30, date: "2024-09-05" },
        { transactionId: "T210", item: "Mody Dick", amount: 30, date: "2024-09-05" },
        { transactionId: "T110", item: "Varka", amount: 30, date: "2024-09-05" },
        { transactionId: "T011", item: "Cat Bed", amount: 40, date: "2024-09-06" },
        { transactionId: "T012", item: "Business Trip Ticket", amount: 300, date: "2024-09-04" }
      ]
    }
  ]
};

const AdminPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        All User Transactions
      </Typography>
      <Grid container spacing={2}>
        {transactionsData.users.map((user) => (
          <Grid item xs={12} md={6} key={user.userId}>
            <Card>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <ul>
                  {user.transactions.map((transaction) => (
                    <li key={transaction.transactionId}>
                      {transaction.date}: {transaction.item} - ${transaction.amount}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AdminPage;
