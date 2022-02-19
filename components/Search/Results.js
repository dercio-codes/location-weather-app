import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GrainIcon from "@mui/icons-material/Grain";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Results({
  weatherLocation,
  temperature_max,
  temperature_min,
  prescipitation,
  wind,
  sunrise,
  sunset,
  description,
  icon,
}) {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        width: "100%",
        // background: "pink",
        flexGrow: 1,
        padding: 8,
      }}
    >
      <Grid container rowSpacing={10} spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              minHeight: 300,
              width: "100%",
              // background: "red",
              padding: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#eee",
              }}
            >
              {weatherLocation}
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={7}>
                <Box
                  sx={{
                    width: "100%",
                    height: 160,
                    // background: "green",
                    // backgroundImage:`url(${icon})`,
                    // backgroundSize:'contain',
                    // backgroundPosition:'center',
                    // backgroundRepeat:'no-repeat'
                  }}
                >
                  <img
                    src={icon}
                    alt="weather icon"
                    style={{
                      objectFit: "contain",
                    }}
                  ></img>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#eee",
                  }}
                >
                  {description}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    // background: "green",
                  }}
                >
                  <Tooltip title="Current Temperature">
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#eee",
                      }}
                    >
                      {temperature_max}
                      {" °C"}
                    </Typography>
                  </Tooltip>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={5}
            sx={{
              minHeight: 300,
              width: "100%",
              background: "rgb(57, 107, 174)",
              padding: 4,
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Tooltip title="Max Temperature" placement="top">
                <Grid item xs={2} sm={4} md={4}>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          height: "100px",
                          background: "transparent",
                          color: "#eee",
                        }}
                      >
                        <ArrowUpwardIcon
                          sx={{
                            fontSize: 32,
                          }}
                        />
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        fontWeight: "800",
                        color: "#eee",
                      }}
                    >
                      {temperature_max}
                      {" °C"}
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Tooltip title="Min Temperature" placement="top">
                <Grid item xs={2} sm={4} md={4}>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      <ArrowDownwardIcon
                        sx={{
                          fontSize: 32,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      {temperature_min}
                      {" °C"}
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Tooltip title="Precipitation" placement="right">
                <Grid item xs={2} sm={4} md={4}>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      <GrainIcon
                        sx={{
                          fontSize: 32,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      {prescipitation}
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Tooltip title="Wind Direction" placement="left">
                <Grid item xs={2} sm={4} md={4}>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 17 16.346">
                        <path
                          d="M12.135,3A4.244,4.244,0,0,0,8.462,5.117a2.89,2.89,0,0,0-3.816,2.49A2.932,2.932,0,0,0,2,10.519a2.992,2.992,0,0,0,.033.327h4a1.984,1.984,0,0,1-.111-.654A1.961,1.961,0,0,1,7.885,8.231h.654A3.273,3.273,0,0,1,11.808,11.5a3.235,3.235,0,0,1-.67,1.962h4.92a2.934,2.934,0,0,0,.309-5.853c.01-.118.018-.238.018-.359A4.25,4.25,0,0,0,12.135,3ZM7.885,9.538a.654.654,0,1,0,0,1.308h.654a.654.654,0,1,1,0,1.308H2.654a.654.654,0,1,0,0,1.308H8.538a1.962,1.962,0,0,0,0-3.923ZM3.961,14.769a.654.654,0,1,0,.654.654A.654.654,0,0,0,3.961,14.769Zm2.615,0a.654.654,0,1,0,0,1.308h6.865a.981.981,0,1,1,0,1.962h-.981a.654.654,0,1,0,0,1.308h.981a2.288,2.288,0,0,0,0-4.577Z"
                          transform="translate(-2 -3)"
                        ></path>
                      </svg>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      {wind}
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Tooltip title="Sunrise Time" placement="bottom">
                <Grid item xs={2} sm={4} md={4}>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      <div
                        style={{
                          height: "50%",
                          width: "50%",
                          background: "url('/sunrise-svgrepo-com.svg')",
                          backgroundSize: "contain",
                        }}
                      ></div>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      {sunrise}
                      {" AM"}
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Tooltip title="Sunset Time" placement="bottom">
                <Grid item xs={2} sm={4} md={4}>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                      }}
                    >
                      <div
                        style={{
                          height: "50%",
                          width: "50%",
                          background: "url('/sunset-svgrepo-com.svg')",
                          backgroundSize: "contain",
                        }}
                      ></div>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100,
                        color: "#eee",
                      }}
                    >
                      {sunset}
                      {" PM"}
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
