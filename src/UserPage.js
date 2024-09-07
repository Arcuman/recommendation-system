import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const UserPage = () => {
  const [likeStatus, setLikeStatus] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {/* Image Section - Small images in a row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          gap: 2, // Space between images
        }}
      >
        <CardMedia
          component="img"
          image="https://www.gooddoghotel.com/wp-content/uploads/2017/04/services-boarding.png" // Replace with your image URL
          alt="Pet Paradise Hostel"
          sx={{
            width: 150,
            height: 150,
            borderRadius: 2,
          }}
        />
        <CardMedia
          component="img"
          image="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/06/27141745/pet-hotels.jpg?tr=w-1280,f-jpg,pr-true" // Another image
          alt="Pets in Paradise"
          sx={{
            width: 150,
            height: 150,
            borderRadius: 2,
          }}
        />
        <CardMedia
          component="img"
          image="https://media.istockphoto.com/id/1260116380/photo/small-dogs-pug-breed-sitting-on-the-dog-couch-in-the-cage-in-dog-hotel.jpg?s=612x612&w=0&k=20&c=DuiNKDMYI4b88pd-xDUQtjNgqLlt_4GqIc0c30cLy9E=" // Another image
          alt="Pet Care"
          sx={{
            width: 150,
            height: 150,
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Card Section */}
      <Card sx={{ width: "60%", p: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom textAlign="center">
            Pet Paradise Hostel
          </Typography>
          <Typography variant="body1" textAlign="center" gutterBottom>
            Excellent care for your pets while you're away!
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            This recommendation is based on your recent transactions and the
            preferences of similar users.
          </Typography>

          {/* Like/Dislike Buttons */}
          <Box mt={4} display="flex" justifyContent="center">
            <Button
              variant={likeStatus === "like" ? "contained" : "outlined"}
              color="primary"
              startIcon={<ThumbUpIcon />}
              onClick={() => setLikeStatus("like")}
              sx={{ mr: 2 }}
            >
              Like
            </Button>
            <Button
              variant={likeStatus === "dislike" ? "contained" : "outlined"}
              color="secondary"
              startIcon={<ThumbDownIcon />}
              onClick={() => setLikeStatus("dislike")}
            >
              Dislike
            </Button>
          </Box>

          {/* Status Message */}
          <Box mt={4} textAlign="center">
            {likeStatus === "like" && (
              <Typography variant="body2" color="primary">
                You liked this recommendation!
              </Typography>
            )}
            {likeStatus === "dislike" && (
              <Typography variant="body2" color="error">
                You disliked this recommendation.
              </Typography>
            )}
            {likeStatus === null && (
              <Typography variant="body2" color="textSecondary">
                Provide your feedback.
              </Typography>
            )}
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ mt: 4, width: "60%" }} // Ensure the button matches the card width
            >
              Get Free Meal
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Free Meal Button */}
    </Box>
  );
};

export default UserPage;
