import React from "react";
import { Container, Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const mockStats = [
  { shortLink: "http://short.ly/abc123", originalUrl: "https://example.com", expiry: "2025-07-01T12:00:00Z", clicks: 2 },
  { shortLink: "http://short.ly/xyz456", originalUrl: "https://openai.com", expiry: "2025-07-02T12:00:00Z", clicks: 5 }
];

const StatsPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Shortened URL Stats</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Short URL</TableCell>
          <TableCell>Original URL</TableCell>
          <TableCell>Expiry</TableCell>
          <TableCell>Clicks</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mockStats.map((row, i) => (
          <TableRow key={i}>
            <TableCell>{row.shortLink}</TableCell>
            <TableCell>{row.originalUrl}</TableCell>
            <TableCell>{row.expiry}</TableCell>
            <TableCell>{row.clicks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Container>
);

export default StatsPage;