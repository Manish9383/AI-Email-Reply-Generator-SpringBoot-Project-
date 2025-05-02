import { useState } from 'react'
import './App.css'
import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:9090/api/email/generate", {
        emailContent,
        tone 
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 flex items-center justify-center p-4">
      <Box className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-2xl transform transition-all duration-500">
        <Typography 
          variant="h3" 
          className="text-4xl font-bold text-white text-center mb-6 animate-fade-in"
        >
          Email Reply Generator
        </Typography>

        <Box className="space-y-6">
          <TextField 
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            className="bg-white bg-opacity-20 text-white rounded-lg"
            InputLabelProps={{ className: 'text-white' }}
            InputProps={{ className: 'text-white' }}
          />

          <FormControl fullWidth className="bg-white bg-opacity-20 rounded-lg">
            <InputLabel className="text-white">Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
              className="text-white"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            {loading ? <CircularProgress size={24} className="text-white" /> : "Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography 
            className="text-red-300 mt-4 text-center animate-pulse"
          >
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box className="mt-8 animate-slide-in">
            <Typography 
              variant="h6" 
              className="text-white font-semibold mb-4"
            >
              Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply || ''}
              inputProps={{ readOnly: true }}
              className="bg-white bg-opacity-20 text-white rounded-lg"
              InputLabelProps={{ className: 'text-white' }}
              InputProps={{ className: 'text-white' }}
            />
            <Button
              variant="outlined"
              className="mt-4 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white font-semibold py-2 rounded-lg transform hover:scale-105 transition-transform duration-300"
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Box>
    </div>
  )
}

export default App