import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SecurityIcon from "@mui/icons-material/Security";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import MovieIcon from "@mui/icons-material/Movie";
import VideocamIcon from "@mui/icons-material/Videocam";
import CampaignIcon from "@mui/icons-material/Campaign";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import MicIcon from "@mui/icons-material/Mic";
import BrushIcon from "@mui/icons-material/Brush";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GroupsIcon from "@mui/icons-material/Groups";

const gold = "#f5a623";
const darkBg = "#091323";
const cardBg = "#111827";

/* ============================
   MARKETPLACE DATA
============================ */

const roles = [
  "Video Editors",
  "Graphic Designers",
  "AI Specialists",
  "Influencers",
  "UGC Creators",
  "Videographers",
  "Podcast Editors",
];

const features = [
  {
    icon: <AccessTimeIcon sx={{ color: gold }} />,
    title: "Real-time availability tracking",
  },
  {
    icon: <PersonAddAltIcon sx={{ color: gold }} />,
    title: "Direct booking system",
  },
  {
    icon: <VisibilityIcon sx={{ color: gold }} />,
    title: "Portfolio showcase",
  },
  {
    icon: <StarBorderIcon sx={{ color: gold }} />,
    title: "Ratings & reviews",
  },
  {
    icon: <SecurityIcon sx={{ color: gold }} />,
    title: "Secure payment system",
  },
  {
    icon: <PhoneIphoneIcon sx={{ color: gold }} />,
    title: "Web + Mobile App access",
  },
];

/* ============================
   SERVICES DATA (Your Existing)
============================ */

const servicesData = [
  {
    category: "Video Production",
    items: [
      { title: "Ad Films", icon: <MovieIcon /> },
      { title: "Social Media Ads", icon: <VideocamIcon /> },
      { title: "Promotional Videos", icon: <CampaignIcon /> },
      { title: "Reel & Vertical Content", icon: <SmartDisplayIcon /> },
    ],
  },
  {
    category: "Podcast Production",
    items: [
      { title: "Video Podcasts", icon: <MicIcon /> },
      { title: "Audio Podcasts", icon: <MicIcon /> },
      { title: "Studio Setup & Recording", icon: <MicIcon /> },
    ],
  },
  {
    category: "Creative Services",
    items: [
      { title: "Graphic Designing", icon: <BrushIcon /> },
      { title: "Professional Video Editing", icon: <ContentCutIcon /> },
      { title: "Motion Graphics", icon: <AutoAwesomeIcon /> },
    ],
  },
  {
    category: "AI Solutions",
    items: [
      { title: "AI Video Generation", icon: <SmartToyIcon /> },
      { title: "AI Avatar Creation", icon: <SmartToyIcon /> },
      { title: "AI Influencer Development", icon: <SmartToyIcon /> },
    ],
  },
  {
    category: "Marketing Services",
    items: [
      { title: "Influencer Marketing", icon: <CampaignIcon /> },
      { title: "UGC Content Creation", icon: <GroupsIcon /> },
      { title: "Brand Campaign Production", icon: <CampaignIcon /> },
    ],
  },
];

/* ============================
   COMPONENTS
============================ */

const ServiceCard = ({ icon, title }) => (
  <Card
    sx={{
      backgroundColor: cardBg,
      borderRadius: 3,
      textAlign: "center",
      border: "1px solid rgba(255,255,255,0.05)",
      transition: "0.3s",
      "&:hover": {
        borderColor: gold,
      },
    }}
  >
    <CardContent>
      <Box sx={{ color: gold, mb: 2 }}>{icon}</Box>
      <Typography sx={{ color: "#fff" }}>{title}</Typography>
    </CardContent>
  </Card>
);

/* ============================
   MAIN SECTION
============================ */

export default function ServicesSection() {
  return (
    <Box sx={{ backgroundColor: darkBg }}>
      {/* ================= MARKETPLACE SECTION ================= */}
      <Box sx={{ backgroundColor: darkBg, py: 8, px: 40 }}>
        {" "}
        {/* Heading */}{" "}
        <Typography
          variant="h3"
          align="center"
          padding={6}
          sx={{ color: "#fff", fontWeight: 600 }}
        >
          {" "}
          Story Works <span style={{ color: gold }}>Studio Services</span>{" "}
        </Typography>{" "}
        {servicesData.map((section, index) => (
          <Grid key={index} mb={6} px={9}>
            {" "}
            <Typography
              variant="h6"
              sx={{ color: gold, mb: 3, fontWeight: 500 }}
            >
              {" "}
              {section.category}{" "}
            </Typography>{" "}
            <Grid container spacing={3} justifyContent="start">
              {" "}
              {section.items.map((service, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                  {" "}
                  <ServiceCard icon={service.icon} title={service.title} />{" "}
                </Grid>
              ))}{" "}
            </Grid>{" "}
          </Grid>
        ))}{" "}
      </Box>
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="caption" sx={{ color: gold, letterSpacing: 2 }}>
            MARKETPLACE
          </Typography>

          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 700, mt: 2 }}
          >
            Creator <span style={{ color: gold }}>Marketplace</span>
          </Typography>

          <Typography sx={{ color: "#9ca3af", mt: 2 }}>
            Hire professionals after login. Available roles:
          </Typography>

          {/* Role Chips */}
          <Box sx={{ mt: 4 }}>
            {roles.map((role) => (
              <Chip
                key={role}
                label={role}
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.1)",
                  m: 1,
                  "&:hover": { borderColor: gold },
                }}
              />
            ))}
          </Box>

          {/* Features */}
          <Grid container spacing={3} sx={{ mt: 6 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    backgroundColor: cardBg,
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.05)",
                    "&:hover": {
                      borderColor: gold,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      color: "#fff",
                    }}
                  >
                    {feature.icon}
                    {feature.title}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <Box sx={{ mt: 8 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: gold,
                color: "#000",
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#ffb84d",
                },
              }}
            >
              Get Started →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= SERVICES SECTION ================= */}

      {/* <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#fff", fontWeight: 600, mb: 6 }}
        >
          Story Works <span style={{ color: gold }}>Studio Services</span>
        </Typography>

        <Container maxWidth="lg">
          {servicesData.map((section, index) => (
            <Box key={index} mb={6}>
              <Typography
                variant="h6"
                sx={{ color: gold, mb: 3, fontWeight: 500 }}
              >
                {section.category}
              </Typography>

              <Grid container spacing={3}>
                {section.items.map((service, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <ServiceCard icon={service.icon} title={service.title} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Container>
      </Box> */}
    </Box>
  );
}
