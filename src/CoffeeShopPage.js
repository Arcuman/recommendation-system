import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import FavoriteIcon from '@mui/icons-material/Favorite';

// List of coffee shops
const coffeeShops = [
  {
    name: "Brew & Beans Coffee Shop",
    address: "456 Coffee St, Beanville",
    hours: "8:00 AM - 8:00 PM",
  },
  {
    name: "Caffeine Haven",
    address: "789 Java Ave, Coffeetown",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    name: "The Daily Grind",
    address: "123 Espresso Way, Brew City",
    hours: "6:00 AM - 6:00 PM",
  },
];

const CoffeeShopPage = () => {
  const [currentShopIndex, setCurrentShopIndex] = useState(0); // Track current coffee shop
  const [likeStatus, setLikeStatus] = useState(null); // Track like/dislike status
  const [showLocationCard, setShowLocationCard] = useState(false); // Control when to show location
  const [isSwiped, setIsSwiped] = useState(false); // Control swipe state for animation
  const [dragStartX, setDragStartX] = useState(null); // Track initial mouse drag position
  const [favorite, setFavorite] = useState(false); // Track favorite status

  const handleSwipeRight = () => {
    setLikeStatus("like");
    setShowLocationCard(true); // Show location when liked
    setIsSwiped(true);
  };

  const handleSwipeLeft = () => {
    setLikeStatus("dislike");
    setShowLocationCard(false); // Hide location for next card
    setIsSwiped(true);

    // Move to next coffee shop after 1 second and reset swipe state
    setTimeout(() => {
      setCurrentShopIndex((prevIndex) => (prevIndex + 1) % coffeeShops.length); // Move to next coffee shop after swipe
      setLikeStatus(null); // Reset like status to clear the red color
      setIsSwiped(false);  // Reset swipe state
    }, 1000); // 1 second delay
  };

  const handlers = useSwipeable({
    onSwipedRight: handleSwipeRight,
    onSwipedLeft: handleSwipeLeft,
  });

  // Handle mouse drag events for desktop
  const handleMouseDown = (e) => {
    setDragStartX(e.clientX); // Track starting point of drag
  };

  const handleMouseMove = (e) => {
    if (dragStartX !== null) {
      const deltaX = e.clientX - dragStartX;
      if (deltaX > 100) {
        handleSwipeRight(); // Simulate swipe right if drag is far enough
        setDragStartX(null);
      } else if (deltaX < -100) {
        handleSwipeLeft(); // Simulate swipe left if drag is far enough
        setDragStartX(null);
      }
    }
  };

  const handleMouseUp = () => {
    setDragStartX(null); // Reset drag start position when mouse is released
  };

  const currentShop = coffeeShops[currentShopIndex]; // Get current coffee shop
  const isLastCard = currentShopIndex === coffeeShops.length - 1; // Check if it's the last coffee shop

  return (
    <Box
      {...handlers}
      onMouseDown={handleMouseDown} // Handle mouse down for dragging
      onMouseMove={handleMouseMove} // Handle mouse move for dragging
      onMouseUp={handleMouseUp} // Handle mouse up to finish drag
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          width: "60%",
          p: 4,
          backgroundColor:
            likeStatus === "like" ? "lightgreen" : likeStatus === "dislike" ? "lightcoral" : "white",
          transition: "transform 0.5s ease-out",
          transform: isSwiped
            ? likeStatus === "like"
              ? "translateX(100vw)"
              : "translateX(-100vw)"
            : "translateX(0)",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom textAlign="center">
            {currentShop.name}
          </Typography>
          <Typography variant="body1" textAlign="center" gutterBottom>
            A cozy place with the best coffee in town!
          </Typography>

          <Typography variant="body2" textAlign="center" color="textSecondary" sx={{ mt: 2 }}>
            This recommendation is based on your recent visits and preferences of other users.
          </Typography>

          {/* Status Message */}
          <Box mt={4} textAlign="center">
            {likeStatus === "like" && (
              <Typography variant="body2" color="primary">
                You liked this recommendation! Showing address below.
              </Typography>
            )}
            {likeStatus === "dislike" && (
              <Typography variant="body2" color="error">
                You disliked this recommendation! Moving to the next coffee shop.
              </Typography>
            )}
            {likeStatus === null && (
              <Typography variant="body2" color="textSecondary">
                Swipe right to like, left to dislike (drag on desktop).
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Show location card if liked */}
      {showLocationCard && (
        <Card sx={{ width: "60%", p: 4, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Coffee Shop Location
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
              {currentShop.name}
            </Typography>
            <Typography variant="body2" textAlign="center" color="textSecondary">
              Address: {currentShop.address}
            </Typography>
            <Typography variant="body2" textAlign="center" color="textSecondary">
              Hours: {currentShop.hours}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Show coupon and favorite buttons if it's the last card */}
      {likeStatus === 'like' && (
        <Box mt={4} textAlign="center">
          <Button variant="contained" color="secondary" size="large" sx={{ m: 2 }}>
            Get Free Coffee Coupon
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ m: 2 }}
            startIcon={<FavoriteIcon />}
            onClick={() => setFavorite(!favorite)} // Toggle favorite status
          >
            {favorite ? "Favorited" : "Favorite"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CoffeeShopPage;
