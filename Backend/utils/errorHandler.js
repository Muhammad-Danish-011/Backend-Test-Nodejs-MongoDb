exports.errorHandler = (res, error) => {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error', error: error.message });
  };
  