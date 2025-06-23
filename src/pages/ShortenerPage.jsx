import React, { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import UrlFormRow from "../components/UrlFormRow";
import api from "../services/api"; // <-- ✅ correct import
import { useNavigate } from "react-router-dom";

const MAX = 5;

const ShortenerPage = () => {
  const [rows, setRows] = useState([{ url: "", validity: "", shortcode: "" }]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const addRow = () => {
    if (rows.length < MAX) {
      setRows([...rows, { url: "", validity: "", shortcode: "" }]);
    }
  };

  const updateRow = (index, data) => {
    const newRows = [...rows];
    newRows[index] = data;
    setRows(newRows);
  };

  const generate = async () => {
    const valid = rows.filter(r => r.url.trim());
    if (valid.length === 0) return alert("Enter at least one URL");
    const data = await api.createShortUrl(valid); // <-- ✅ correct call
    setResults(data);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      {rows.map((row, i) => (
        <UrlFormRow key={i} index={i} data={row} onChange={updateRow} />
      ))}
      <Button onClick={addRow} disabled={rows.length >= MAX} sx={{ mr: 2 }}>
        Add
      </Button>
      <Button variant="contained" onClick={generate}>
        Generate
      </Button>
      <Button sx={{ ml: 2 }} variant="outlined" onClick={() => navigate("/stats")}>
        View Stats
      </Button>
      <Box mt={4}>
        {results.map((res, i) => (
          <Box key={i} sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography><strong>Short Link:</strong> {res.shortLink}</Typography>
            <Typography><strong>Expires At:</strong> {res.expiry}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ShortenerPage;
