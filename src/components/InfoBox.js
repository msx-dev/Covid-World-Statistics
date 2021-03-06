import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox__h2">{cases}</h2>
        <Typography className="infoBox__total">{total} Total cases</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
