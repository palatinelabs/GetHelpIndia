exports.healthCheck = (req, res) => {
    return res.status(200).json({ status: 'ok', message: 'Server is healthy.' });
  };
  