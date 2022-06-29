import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    
  } from "@mui/material";
  import React from "react";
  
  const ProductList = () => {
    const navigate= useNavigate();
    const prod1 =
      "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg";
    const prod2 =
      "https://www.nme.com/wp-content/uploads/2020/08/PlayerUnknown.jpg";
    const prod3 = "https://i.ytimg.com/vi/4TOy_8_h4n4/maxresdefault.jpg";
    const prod4 =
      "https://cdn1.epicgames.com/2bc23fc2438c47ec8acb0641980f50c1/offer/DS1_Horizontal-2560x1440-f66774d1e72fe2c34bcc01311d5f654e.jpg";
  
    return (
      <Paper sx={{ height: "100vh" }}>
        <header className="bg-light">
          <Container sx={{ padding: "5rem 0" }}>
            <TextField
              // className="w-100"
              sx={{ width: "100%" }}
              label="Explore"
              placeholder="Search Your Product..."
            />
          </Container>
        </header>
        <section>
          {/* <div className="row">
            <div className="col-md-3"></div>
          </div>
  
          <div className="card"></div> */}
  
          {/* container - row, item - column */}
  
          <Container maxWidth="xl" className="mt-5">
            <Grid container spacing={5}>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod1} height={180} />
                  <CardContent>
                    <Typography variant="h5">
                      Call of Duty - Modern Warefare
                    </Typography>
                    <Typography className="text-muted" variant="caption">
                      Shooter
                    </Typography>
                    <Typography className="mt-4" variant="h4">
                      $22.99 /-
                    </Typography>
                    <button varient="ontlined"
                    onClick={(e) =>Navigate("/gallery")}> Go to gallery</button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod2} height={180} />
  
                  <CardContent>
                    <h1>Column 2</h1>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod3} height={180} />
  
                  <CardContent>
                    <h1>Column 3</h1>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={prod4} height={180} />
  
                  <CardContent>
                    <h1>Column 4</h1>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Paper>
    );
  };
  
  export default ProductList;