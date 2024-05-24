import SendIcon from "@mui/icons-material/Send";
const InvoiceDrawer = () => {
    const [invoiceDrawerOpen, setInvoiceDrawerOpen] = useState(false);
    return(
        <Button
              variant="contained"
              fullWidth
              startIcon={<SendIcon />}
              sx={{ mb: 2 }}
              onClick={() => setInvoiceDrawerOpen(true)}
            >
              Send Invoice
            </Button>
            <Drawer
              anchor="right"
              open={invoiceDrawerOpen}
              onClose={toggleInvoiceDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  position: "absolute",
                  width: 380,
                  boxSizing: "border-box",
                  padding: 4,
                },
              }}
            >
              <Box
                p={2}
                width="100%"
                role="presentation"
                className="sidebar-header"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  mt: "-0.5rem",
                }}
              >
                <Typography variant="body1" sx={{ ml: "-0.5rem" }}>
                  Send Invoice
                </Typography>
                <Box sx={{ mr: "-1rem" }}>
                  <IconButton size="small" onClick={closeInvoiceDrawer}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
              <form>
                <TextField
                  fullWidth
                  label="From"
                  variant="outlined"
                  value={invoiceSentFrom || customer.email}
                  onChange={(e)=>setInvoiceSentFrom(e.target.value)}
                  sx={{ mt: 4, mb: 6 }}
                />
                <TextField
                  fullWidth
                  label="To"
                  variant="outlined"
                  value={invoiceSentTo}
                  onChange={(e) => setInvoiceSentTo(e.target.value)}
                  sx={{ mb: 6 }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  value={invoiceSubject}
                  onChange={(e) => setInvoiceSubject(e.target.value)}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 6 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  value={invoiceMessage}
                  onChange={(e) => setInvoiceMessage(e.target.value)}
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mr: 1, mt: 2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeInvoiceDrawer(); 
                  }}
                >
                  Send
                </Button>
                <Button
                  variant="outlined"
                  sx={{ mt: 2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeInvoiceDrawer(); 
                  }}
                >
                  Cancel
                </Button>
              </form>
            </Drawer>
    )
}

