import React from "react";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

function ProfilePost() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styles = (theme) => ({
    indicator: {
      backgroundColor: "white",
    },
  });
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "green" } }}
            aria-label="lab API tabs example"
          >
            <Tab label="Posts" value="1" />
            <Tab label="Images" value="2" />
            <Tab label="Settings" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">All Post</TabPanel>
        <TabPanel value="2">Images</TabPanel>
        <TabPanel value="3">Settings</TabPanel>
      </TabContext>
    </div>
  );
}

export default ProfilePost;
