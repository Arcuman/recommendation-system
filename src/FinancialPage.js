import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom"; // Use this for internal routing

const financialTools = [
  {
    name: "Credit Card",
    description: "A credit card with cashback rewards and no annual fee.",
    link: "https://alfabank.ru/get-money/credit-cards/"
  },
  {
    name: "Overdraft",
    description: "An overdraft facility with low interest rates for short-term needs.",
    link: "https://alfabank.ru/corporate/credit/overdraft/"
  },
  {
    name: "Loan (Кредитные)",
    description: "Personal loan with flexible repayment options and low interest rates.",
    link: "https://alfabank.ru/get-money/"
  },
  {
    name: "Cryptocurrency (Криптовалюты)",
    description: "Investment in cryptocurrencies such as Bitcoin and Ethereum with a secure wallet.",
    link: "https://www.alfabank.by/partners-project/crypto-card/"
  },
];

const FinancialToolsPage = () => {
  const [currentToolIndex, setCurrentToolIndex] = useState(0); // Track current financial tool
  const [likeStatus, setLikeStatus] = useState(null); // Track like/dislike status
  const [showToolDetails, setShowToolDetails] = useState(false); // Control when to show tool details
  const [isSwiped, setIsSwiped] = useState(false); // Control swipe state for animation
  const [dragStartX, setDragStartX] = useState(null); // Track initial mouse drag position

  const handleSwipeRight = () => {
    setLikeStatus("like");
    setShowToolDetails(true); // Show tool details when liked
    setIsSwiped(true);
  };

  const handleSwipeLeft = () => {
    setLikeStatus("dislike");
    setShowToolDetails(false); // Hide tool details for the next suggestion
    setIsSwiped(true);

    // Move to next financial tool after 1 second and reset swipe state
    setTimeout(() => {
      setCurrentToolIndex((prevIndex) => (prevIndex + 1) % financialTools.length); // Move to next tool after swipe
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

  const currentTool = financialTools[currentToolIndex]; // Get current financial tool

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
            {currentTool.name}
          </Typography>
          <Typography variant="body1" textAlign="center" gutterBottom>
            {currentTool.description}
          </Typography>

          <Typography variant="body2" textAlign="center" color="textSecondary" sx={{ mt: 2 }}>
            This financial tool is suggested based on your transaction history and preferences.
          </Typography>

          {/* Status Message */}
          <Box mt={4} textAlign="center">
            {likeStatus === "like" && (
              <Typography variant="body2" color="primary">
                You liked this suggestion! See more details below.
              </Typography>
            )}
            {likeStatus === "dislike" && (
              <Typography variant="body2" color="error">
                You disliked this suggestion! Moving to the next financial tool.
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

      {/* Show tool details if liked */}
      {showToolDetails && (
        <Card sx={{ width: "60%", p: 4, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              More Details about {currentTool.name}
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
              {currentTool.description}
            </Typography>
            {currentTool.link.startsWith("http") ? (
              <Button variant="contained" color="primary" href={currentTool.link} target="_blank">
                Read Article
              </Button>
            ) : (
              <Button variant="contained" color="primary" component={Link} to={currentTool.link}>
                Learn More
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default FinancialToolsPage;
