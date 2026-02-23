import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { Paper } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarBorderIcon from "@mui/icons-material/StarBorder";
//content in card
const services = [
  "Ad films",
  "Social media campaigns",
  "Podcast production",
  "Graphic design",
  "Video editing",
  "AI-powered video generation",
  "Influencer campaign management",
];
const businessFeatures = [
  "Browse skilled professionals",
  "Filter by availability",
  "View portfolios",
  "Hire instantly",
  "Track projects",
];

const creatorFeatures = [
  "Create professional profiles",
  "Upload portfolio",
  "Update availability",
  "Accept or decline projects",
  "Manage earnings",
];

const aboutpage = () => {
  return (
    <>
      {/*first section --------------------------------------------------->*/}
      <Box
        sx={{
          backgroundColor: "#091323", // dark navy background
          color: "#fff",
          py: { xs: 19, md: 14 },
          // Updated mt logic below
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          {/* Small Label */}
          <Typography
            variant="overline"
            sx={{
              color: "#F59E0B", // orange
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            OUR VISION
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              mt: 2,
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            Building a Scalable{" "}
            <Box component="span" sx={{ color: "#F59E0B" }}>
              Content
            </Box>
            <br />
            <Box component="span" sx={{ color: "#F59E0B" }}>
              Ecosystem
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              color: "#A0AEC0",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            We combine professional production with direct creator access.
            Content drives growth — and access to the right talent drives speed.
          </Typography>
        </Container>
      </Box>
      {/*second section --------------------------------------------------->*/}
      <Box
        sx={{
          backgroundColor: "#0A0F1C", // dark navy background
          color: "#fff",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              lineHeight: 1.2,
            }}
          >
            Who We{" "}
            <Box component="span" sx={{ color: "#F59E0B" }}>
              Are
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "#A0AEC0", // muted gray
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.8,
              maxWidth: "750px",
              mx: "auto",
            }}
          >
            Story Works is a creative production studio and a technology-driven
            freelance platform. We bridge businesses and creators through
            structured execution and smart systems.
          </Typography>
        </Container>
      </Box>
      {/*third section --------------------------------------------------->*/}

      <Box
        sx={{
          bgcolor: "#091323",
          color: "#fff",
          py: 10,
        }}
      >
        <Container maxWidth="8xl">
          <Grid
            container
            alignItems="flex-start"
            justifyContent="center"
            spacing={6}
          >
            {/* Left Section */}
            <Grid
              item
              xs={12}
              lg={6} // 👈 changed from md to lg
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 3,
                  mt: 2,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "#F5A623",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MovieCreationIcon sx={{ color: "#000" }} />
                </Box>
              </Box>

              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Studio Division
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#9CA3AF",
                  maxWidth: 500,
                  mx: { xs: "auto", lg: 0 },
                }}
              >
                Our internal team delivers everything end-to-end. From concept
                to final cut.
              </Typography>
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} lg={6}>
              {" "}
              {/* 👈 changed here also */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {services.map((service, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      bgcolor: "#0B1220",
                      borderRadius: 3,
                      py: 2,
                      pl: 2,
                      pr: { xs: 2, lg: 22 },
                      width: "100%",
                      border: "1px solid #1F2937",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#F5A623",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: "#F5A623",
                        borderRadius: "50%",
                        mr: 2,
                      }}
                    />

                    <Typography variant="body1" color="white">
                      {service}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/*fourth section --------------------------------------------------->*/}

      <Box
        sx={{
          bgcolor: "#0A0F1C",
          color: "#fff",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          {/* Top Center Section */}
          <Box textAlign="center" mb={8}>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#F5A623",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <GroupsIcon sx={{ color: "#000" }} />
            </Box>

            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "24px", md: "32px" } }}
            >
              Our Creator Platform
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#9CA3AF",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Our marketplace enables seamless collaboration. Accessible via web
              and mobile app.
            </Typography>
          </Box>

          {/* Cards Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              size={12}
              sx={{
                maxWidth: "1000px", // 👈 controls how wide the cards area is
                width: "100%",
              }}
            >
              {/* For Businesses */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #1F2937",
                    borderRadius: 4,
                    p: 4,
                    pr: 20,
                    height: "100%",
                  }}
                >
                  <Box display="flex" alignItems="center" mb={3}>
                    <BusinessCenterIcon sx={{ color: "#F5A623", mr: 1 }} />
                    <Typography variant="h6" color="#ffffff" fontWeight="bold">
                      For Businesses
                    </Typography>
                  </Box>

                  {businessFeatures.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#F5A623",
                          borderRadius: "50%",
                          mr: 2,
                        }}
                      />
                      <Typography sx={{ color: "#9CA3AF" }}>{item}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>

              {/* For Creators */}
              <Grid container xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #1F2937",
                    borderRadius: 4,
                    p: 4,
                    pr: 20,
                    height: "100%",
                  }}
                >
                  <Box display="flex" alignItems="center" mb={3}>
                    <StarBorderIcon sx={{ color: "#F5A623", mr: 1 }} />
                    <Typography variant="h6" color="#ffffff" fontWeight="bold">
                      For Creators
                    </Typography>
                  </Box>

                  {creatorFeatures.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#F5A623",
                          borderRadius: "50%",
                          mr: 2,
                        }}
                      />
                      <Typography sx={{ color: "#9CA3AF" }}>{item}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default aboutpage;
