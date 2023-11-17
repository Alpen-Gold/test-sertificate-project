import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import {
  TableRow,
  Paper,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

function createData(name: string, price: string) {
  return { name, price };
}

const rows = [
  createData("Pick Any 4- Womens Plain T-shirt Combo", "₹1099"),
  createData("Pick Any 4- Plain Womens Boxer Combo", "₹1099"),
  createData("Pick Any 4 - Women Plain Full Sleeve T-shirt Combo", "₹1399"),
  createData("Multicolor Checkered Long Casual Shirts for Women", "₹499"),
  createData("Pick Any 2: Plain Boxy Casual Shirts for Women Combo", "₹799"),
  createData("Blue Floral Anarkali Kurti", "₹599"),
  createData("Jade Black Narrow Cut Flexible Women Jeggings", "₹998"),
  createData("Mustard-yellow Solid Straight-Fit Women Pant", "₹499"),
  createData("Women Pants Combo - Pick Any 2", "₹800"),
  createData("Pista Green Solid Boxy Casual Shirts for Women", "₹449"),
  createData("Plain Burgundy Womens Boxer", "₹349"),
  createData("Striped Front Tie Casual Shirts for Women", "₹449"),
];

function BestPricePage() {
  const h4_text_size = {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "20px",
  };
  const h3_text_size = {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "22px",
    xl: "22px",
  };

  const main_text_size = {
    xs: "20px",
    sm: "24px",
    md: "26px",
    lg: "28px",
    xl: "28px",
  };
  return (
    <BestPriceStyle>
      <Box>
        <Box
          sx={{
            display: "flex",
            margin: "70px 0 0 0",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div className="left_border"></div>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: main_text_size,
              color: "#3C4242",
            }}
          >
            Clothing for Man Online in India
          </Typography>
        </Box>
        <Box sx={{ margin: "32px 0", padding: "0 16px" }}>
          <Typography className="h3" sx={{ fontSize: h3_text_size }}>
            Reexplore Man's Clothing Collection Online at Euphoria
          </Typography>
          <Typography
            className="h4"
            sx={{ margin: "32px 0", fontSize: h4_text_size }}
          >
            Man's Clothing – Are you searching for the best website to buy
            Clothing for Man online in India? Well, your search for the coolest
            and most stylish mans clothing ends here. From trendy Casual Mans
            Wear Online shopping to premium quality cotton man's apparel,
            <span>Euphoria</span> has closet of Man Collection covered with the
            latest and best designs of Man's Clothing Online.
          </Typography>
          <Typography className="h4" sx={{ fontSize: h4_text_size }}>
            Our collection of clothes for man will make you the trendsetter with
            an iconic resemblance of choice in Mans Wear.
          </Typography>
          <Typography
            className="h3"
            sx={{ margin: "32px 0", fontSize: h3_text_size }}
          >
            One-Stop Destination to Shop Every Clothing for Man: Euphoria
          </Typography>
          <Typography className="h4" sx={{ fontSize: h4_text_size }}>
            Today, clothing for man is gaining more and more popularity. This is
            because gone are the days when man used to wear uncomfortable
            fashion. Today, a man looks more handsome when he is dressed in
            comfortable, casual man's clothing. Regarding this,{" "}
            <span>Euphoria</span> has a large selection of stylish man's
            clothing that will make his a winner wherever he goes.
          </Typography>
          <Typography
            className="h4"
            sx={{ margin: "32px 0", fontSize: h4_text_size }}
          >
            Our menswear collection will make you a trendsetter that will become
            an iconic choice in menswear. It is very clear that there are very
            few online man's clothing stores where you can buy Western Wear for
            man that consists of premium materials and elegant designs that you
            are always looking for. In fact,
          </Typography>
          <Typography className="h3" sx={{ fontSize: h3_text_size }}>
            See More
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "60px 0 0",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div className="left_border"></div>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: main_text_size,
              color: "#3C4242",
            }}
          >
            Buy Man's Clothing at Best Price
          </Typography>
        </Box>
        <Box sx={{ margin: "48px 0 120px", padding: "0 20px !important" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="table_th_1">Man's Clothing</TableCell>
                  <TableCell className="table_th_2" align="right">
                    Best price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="table_td_1"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right" className="table_td_2">
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </BestPriceStyle>
  );
}

const BestPriceStyle = styled.div`
  .table_th_1,
  .table_th_2 {
    color: #3c4242;
    font-size: 24px;
    font-weight: 600;
    padding: 28px 48px;
  }

  .table_td_1 {
    padding: 0 48px;
  }

  .table_th_2,
  .table_td_2 {
    border-left: 1px solid #bebcbd !important;
    width: 220px;
    text-align: center;
  }

  .left_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }
  .h3 {
    color: #807d7e;
    font-weight: 600;
  }

  .h4 {
    color: #807d7e;
    font-weight: 400;
  }
  .h4 span {
    font-weight: 700;
  }
`;
export default BestPricePage;
