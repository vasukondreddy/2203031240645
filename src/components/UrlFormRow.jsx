import React from "react";
import { Grid, TextField } from "@mui/material";

const UrlFormRow = ({ index, data, onChange }) => {
  const handle = (field) => (e) =>
    onChange(index, { ...data, [field]: e.target.value });

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
      <Grid item xs={12} md={6}>
        <TextField required fullWidth label="Long URL" value={data.url} onChange={handle("url")} />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField type="number" fullWidth label="Validity (min)" value={data.validity} onChange={handle("validity")} />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField fullWidth label="Custom Shortcode" value={data.shortcode} onChange={handle("shortcode")} />
      </Grid>
    </Grid>
  );
};

export default UrlFormRow;