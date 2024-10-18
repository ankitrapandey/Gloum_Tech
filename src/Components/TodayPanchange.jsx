

// import React, { useState, useEffect } from "react";
// import { Grid, Typography, Box, Paper, Tabs, Tab, CircularProgress } from "@mui/material";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import Brightness2Icon from "@mui/icons-material/Brightness2";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import axios from "axios";

// // Component for individual tab content
// const TabPanel = ({ children, value, index }) => {
//   return (
//     <div role="tabpanel" hidden={value !== index}>
//       {value === index && <Box padding={3}>{children}</Box>}
//     </div>
//   );
// };

// const TodayPanchang = () => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [panchangData, setPanchangData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to fetch data from API
//   useEffect(() => {
//     const fetchPanchangOnLoad = async () => {
//       const now = new Date();
//       const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
//       const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
//       const city = 'Delhi'; // Fixed city value

//       try {
//         const response = await axios.get(
//           'https://gloumastro.com:5000/panchang/panchang',
//           {
//             params: { date: formattedDate, time: formattedTime, cityName: city }
//           }
//         );

//         if (response.data.success) {
//           setPanchangData(response.data.data.response);
//         } else {
//           console.error('API Error:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching panchang data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPanchangOnLoad();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   if (loading) {
//     return (
//       <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
//         <CircularProgress />
//         <Typography>Loading Panchang data...</Typography>
//       </Paper>
//     );
//   }

//   // Display error message if there was an issue with the API call
//   if (error) {
//     return (
//       <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
//         <Typography color="error">Error fetching Panchang data: {error}</Typography>
//       </Paper>
//     );
//   }

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         padding: { xs: "10px", sm: "20px" },
//         maxWidth: "600px",
//         margin: "auto",
//         height: "auto",
//         overflowY: "auto", // Enable vertical scrolling
//       }}
//     >
//       <Typography
//         variant="h6"
//         align="center"
//         gutterBottom
//         sx={{ color: "#6869f9", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" } }}
//       >
//         Today's Panchang and Nakshatra
//       </Typography>

//       {/* Tabs for Panchang, Star of the Day, Chart of Now */}
//       <Tabs
//         value={tabIndex}
//         onChange={handleChange}
//         variant="fullWidth"
//         textColor="primary"
//         indicatorColor="primary"
//         centered
//         sx={{ marginBottom: "16px" }}
//       >
//         <Tab label="Panchang" />
//         <Tab label="Star of the Day" />
//         <Tab label="Chart of Now" />
//       </Tabs>

//       {/* Panchang Content */}
//       <TabPanel value={tabIndex} index={0}>
//         {/* Date and Location Row */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center">
//               <CalendarTodayIcon sx={{ color: "#6869f9", marginRight: "8px" }} />
//               <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
//                 <strong>Date:</strong>
//               </Typography>
//             </Box>
//             <Typography>{panchangData?.date || "N/A"}</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center">
//               <LocationOnIcon sx={{ color: "#6869f9", marginRight: "8px" }} />
//               <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
//                 <strong>Location:</strong>
//               </Typography>
//             </Box>
//             <Typography>{panchangData?.location || "N/A"}</Typography>
//           </Grid>
//         </Grid>

//         {/* Sunrise and Sunset Row */}
//         <Grid container spacing={2} alignItems="center" justifyContent="space-between" marginTop={2}>
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center">
//               <WbSunnyIcon sx={{ color: "#6869f9", marginRight: "8px" }} />
//               <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
//                 <strong>Sunrise:</strong>
//               </Typography>
//             </Box>
//             <Typography>{panchangData?.sunrise || "N/A"}</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center">
//               <Brightness2Icon sx={{ color: "#6869f9", marginRight: "8px" }} />
//               <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
//                 <strong>Sunset:</strong>
//               </Typography>
//             </Box>
//             <Typography>{panchangData?.sunset || "N/A"}</Typography>
//           </Grid>
//         </Grid>

//         {/* Thithi part */}
//         <Box marginTop={2}>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Thithi (Moon Phase): </strong>
//             {panchangData.tithi?.name || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Paksha: </strong>{panchangData.tithi?.type || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Start:</strong>{panchangData.tithi?.start || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>End:</strong>{panchangData.tithi?.end || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Meaning: </strong>{panchangData.tithi?.meaning || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Special:</strong> {panchangData.tithi?.special || 'N/A'}
//           </Typography>
//         </Box>

//         {/* Responsive Nakshatra Section */}
//         <Box marginTop={2}>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Nakshatra (Star of the Day):</strong> {panchangData.nakshatra?.name || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Lord:</strong> {panchangData.nakshatra?.lord || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Start:</strong>{panchangData.nakshatra?.start || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>End:</strong> {panchangData.nakshatra?.end || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Meaning:</strong> {panchangData.nakshatra?.meaning || 'N/A'}
//           </Typography>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>Special:</strong> {panchangData.nakshatra?.special || 'N/A'}
//           </Typography>
//         </Box>
        
//         {/* ...Rest of the component code... */}
//         {/* Flexbox for Current Hora, Yogam, Karanam */}

//         <Box marginTop={3}>
//           <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//             <Grid item xs={12} sm={4}>
//               <Box display="flex" alignItems="center">
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Current Hora:</strong>
//                 </Typography>
//               </Box>
//               <Typography>{panchangData?.currentHora || "N/A"}</Typography>
//             </Grid>
//             {/* yoga part  */}
            
//             <Grid item xs={12} sm={4}>
//               <Box display="flex" alignItems="center">
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Yoga:</strong>{panchangData.yoga?.name || 'N/A'}
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Meaning:</strong>{panchangData.yoga?.meaning || 'N/A'}
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Special:</strong> {panchangData.yoga?.special || 'N/A'}
//                 </Typography>
//               </Box>
//               <Typography>{panchangData?.yogam || "N/A"}</Typography>
//             </Grid>

//             {/* karanam  part */}


//             <Grid item xs={12} sm={4}>
//               <Box display="flex" alignItems="center">
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Karanam:</strong>{panchangData.karana?.name || 'N/A'}
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Type:</strong>{panchangData.karana?.type || 'N/A'}
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Karanam:</strong>
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Start: </strong>{panchangData.karana?.start || 'N/A'}
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>End:</strong>{panchangData.karana?.end || 'N/A'}
//                 </Typography>
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Special:</strong>{panchangData.karana?.special || 'N/A'}
//                 </Typography>
                
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box marginTop={3}>
//           <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//             <Grid item xs={12} sm={4}>
//               <Box display="flex" alignItems="center">
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Rahu Kalam:</strong>
//                 </Typography>
//               </Box>
//               <Typography>{panchangData?.rahuKalam || "N/A"}</Typography>
//             </Grid>

//             {/* yamagandam part  */}
//             <Grid item xs={12} sm={4}>
//               <Box display="flex" alignItems="center">
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Yamagandam:</strong>
//                 </Typography>
//               </Box>
//               <Typography>{panchangData?.yamagandam || "N/A"}</Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box display="flex" alignItems="center">
//                 <Typography variant="subtitle1" style={{ marginRight: "8px", color: "#6869f9" }}>
//                   <strong>Kuligai:</strong>
//                 </Typography>
//               </Box>
//               <Typography>{panchangData?.kuligai || "N/A"}</Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* To-Do and Avoid Section */}
//         <Box marginTop={2}>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>To Do:</strong> {panchangData?.todo || "N/A"}
//           </Typography>
//         </Box>
//         <Box marginTop={2}>
//           <Typography>
//             <strong style={{ color: "#6869f9" }}>To Avoid:</strong> {panchangData?.avoid || "N/A"}
//           </Typography>
//         </Box>

//       </TabPanel>

//       {/* Star of the Day Content */}
//       <TabPanel value={tabIndex} index={1}>
//         <Typography
//           variant="h6"
//           align="center"
//           gutterBottom
//           sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
//         >
//           Star of the Day
//         </Typography>
//         <Typography>{panchangData?.starOfTheDay || "Details about the star of the day will go here."}</Typography>
//       </TabPanel>

//       {/* Chart of Now Content */}
//       <TabPanel value={tabIndex} index={2}>
//         <Typography
//           variant="h6"
//           align="center"
//           gutterBottom
//           sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
//         >
//           Chart of Now
//         </Typography>
//         <Typography>{panchangData?.chartOfNow || "Details about the current chart will go here."}</Typography>
//       </TabPanel>
//     </Paper>
//   );
// };

// export default TodayPanchang;




import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import axios from "axios";

// TabPanel component to manage tab content display
const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box padding={3}>{children}</Box>}
    </div>
  );
};

const TodayPanchang = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [panchangData, setPanchangData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Panchang data on load
  useEffect(() => {
    const fetchPanchangOnLoad = async () => {
      const now = new Date();
      const formattedDate = `${now.getDate().toString().padStart(2, "0")}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getFullYear()}`;
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      const city = "Delhi"; // Fixed city value

      try {
        const response = await axios.get(
          "https://gloumastro.com:5000/panchang/panchang",
          {
            params: { date: formattedDate, time: formattedTime, cityName: city },
          }
        );

        if (response.data.success) {
          setPanchangData(response.data.data.response);
        } else {
          console.error("API Error:", response.data);
        }
      } catch (error) {
        console.error("Error fetching Panchang data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPanchangOnLoad();
  }, []);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  if (loading) {
    return (
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <CircularProgress />
        <Typography>Loading Panchang data...</Typography>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography color="error">Error fetching Panchang data: {error}</Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: "10px", sm: "20px" },
        maxWidth: "600px",
        margin: "auto",
        height: "auto",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{
          color: "#6869f9",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
        }}
      >
        Today's Panchang and Nakshatra
      </Typography>

      {/* Tabs for different sections */}
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        centered
        sx={{ marginBottom: "16px" }}
      >
        <Tab label="Panchang" />
        <Tab label="Star of the Day" />
        <Tab label="Chart of Now" />
      </Tabs>

      {/* Panchang Content */}
      <TabPanel value={tabIndex} index={0}>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <CalendarTodayIcon sx={{ color: "#6869f9", marginRight: "8px" }} />
              <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
                <strong>Date:</strong>
              </Typography>
            </Box>
            <Typography>{panchangData?.date || "N/A"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ color: "#6869f9", marginRight: "8px" }} />
              <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
                <strong>Location:</strong>
              </Typography>
            </Box>
            <Typography>{panchangData?.location || "N/A"}</Typography>
          </Grid>
        </Grid>

        {/* Sunrise and Sunset */}
        <Grid container spacing={2} alignItems="center" justifyContent="space-between" marginTop={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <WbSunnyIcon sx={{ color: "#6869f9", marginRight: "8px" }} />
              <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
                <strong>Sunrise:</strong>
              </Typography>
            </Box>
            <Typography>{panchangData?.sunrise || "N/A"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Brightness2Icon sx={{ color: "#6869f9", marginRight: "8px" }} />
              <Typography variant="subtitle1" sx={{ color: "#6869f9" }}>
                <strong>Sunset:</strong>
              </Typography>
            </Box>
            <Typography>{panchangData?.sunset || "N/A"}</Typography>
          </Grid>
        </Grid>

        {/* Tithi (Moon Phase) */}
        <Box marginTop={2}>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Thithi (Moon Phase):</strong>{" "}
            {panchangData?.tithi?.name || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Paksha:</strong>{" "}
            {panchangData?.tithi?.type || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Start:</strong>{" "}
            {panchangData?.tithi?.start || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>End:</strong>{" "}
            {panchangData?.tithi?.end || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Meaning:</strong>{" "}
            {panchangData?.tithi?.meaning || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Special:</strong>{" "}
            {panchangData?.tithi?.special || "N/A"}
          </Typography>
        </Box>

        {/* Nakshatra */}
        <Box marginTop={2}>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Nakshatra (Star of the Day):</strong>{" "}
            {panchangData?.nakshatra?.name || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Lord:</strong>{" "}
            {panchangData?.nakshatra?.lord || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Start:</strong>{" "}
            {panchangData?.nakshatra?.start || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>End:</strong>{" "}
            {panchangData?.nakshatra?.end || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Meaning:</strong>{" "}
            {panchangData?.nakshatra?.meaning || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>Special:</strong>{" "}
            {panchangData?.nakshatra?.special || "N/A"}
          </Typography>
        </Box>

        {/* Responsive Section for Hora, Yoga, Karanam */}
        <Box marginTop={3}>
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={4}>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Current Hora:</strong>{" "}
                {panchangData?.currentHora || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Yoga:</strong>{" "}
                {panchangData?.yoga?.name || "N/A"}
              </Typography>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Meaning:</strong>{" "}
                {panchangData?.yoga?.meaning || "N/A"}
              </Typography>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Special:</strong>{" "}
                {panchangData?.yoga?.special || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Karanam:</strong>{" "}
                {panchangData?.karana?.name || "N/A"}
              </Typography>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Type:</strong>{" "}
                {panchangData?.karana?.type || "N/A"}
              </Typography>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Start:</strong>{" "}
                {panchangData?.karana?.start || "N/A"}
              </Typography>
              <Typography>
                <strong style={{ color: "#6869f9" }}>End:</strong>{" "}
                {panchangData?.karana?.end || "N/A"}
              </Typography>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Special:</strong>{" "}
                {panchangData?.karana?.special || "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Rahu Kalam, Yamagandam, Kuligai */}
        <Box marginTop={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Rahu Kalam:</strong>{" "}
                {panchangData?.rahuKalam || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Yamagandam:</strong>{" "}
                {panchangData?.yamagandam || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>
                <strong style={{ color: "#6869f9" }}>Kuligai:</strong>{" "}
                {panchangData?.kuligai || "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* To-Do and To Avoid Section */}
        <Box marginTop={2}>
          <Typography>
            <strong style={{ color: "#6869f9" }}>To Do:</strong>{" "}
            {panchangData?.todo || "N/A"}
          </Typography>
          <Typography>
            <strong style={{ color: "#6869f9" }}>To Avoid:</strong>{" "}
            {panchangData?.avoid || "N/A"}
          </Typography>
        </Box>
      </TabPanel>

      {/* Star of the Day Content */}
      <TabPanel value={tabIndex} index={1}>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
        >
          Star of the Day
        </Typography>
        <Typography>{panchangData?.starOfTheDay || "N/A"}</Typography>
      </TabPanel>

      {/* Chart of Now Content */}
      <TabPanel value={tabIndex} index={2}>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
        >
          Chart of Now
        </Typography>
        <Typography>{panchangData?.chartOfNow || "N/A"}</Typography>
      </TabPanel>
    </Paper>
  );
};

export default TodayPanchang;
