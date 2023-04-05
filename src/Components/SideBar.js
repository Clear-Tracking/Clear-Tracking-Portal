import React from "react";
import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {


    return (
        <MenuItem
            active={selected === title}
            style={{
                color: "#000000",
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};


const SideBar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <>
            <Box
            >
                <ProSidebarProvider collapsed={isCollapsed}>
                    <Sidebar>
                        <Menu iconShape="square">
                            {/* LOGO AND MENU ICON */}
                            <MenuItem
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                                
                            >
                                {!isCollapsed && (
                                    <Box
                                    >
                                        <Typography variant="h3" color="74b3ce">
                                            ADMINIS
                                        </Typography>
                                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </MenuItem>

                            {!isCollapsed && (
                                <Box mb="25px">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <img
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptCigQsPn67sgZ0VyO-VXPNk0Vtv8rRPJ6fxsIWEeL4gMMKj_K2HD94MuRU6x0waW6ok&usqp=CAU"}
                                            style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />
                                    </Box>
                                    <Box textAlign="center">
                                        <Typography
                                           
                                        >
                                            Ed Roh
                                        </Typography>
                                        <Typography  color="74b3ce">
                                            VP Fancy Admin
                                        </Typography>
                                    </Box>
                                </Box>
                            )}

                            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                                <Item
                                    title="Dashboard"
                                    to="/"
                                    icon={<HomeOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />

                                <Typography
                                    variant="h6"
                                    color="74b3ce"
                                    sx={{ m: "15px 0 5px 20px" }}
                                >
                                    Database
                                </Typography>
                                <Item
                                    title="Manage Team"
                                    to="/dashboarddatabase"
                                    icon={<PeopleOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Dashboarddatabase"
                                    to="/dashboarddatabase"
                                    icon={<ContactsOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                
                            </Box>
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
            </Box>
        </>
    );
};

export default SideBar;