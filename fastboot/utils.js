export function passthrough(req) {
  if (!(req.headers['accept']?.split(',') ?? []).includes('text/html')) {
    return true;
  }

  if (req.url.includes('/tests') || req.url.startsWith('/testem')) {
    return true;
  }

  return false;
}

export function fixError(error) {
  if (error.name === 'UnrecognizedURLError') {
    error.message = `${error.name} ${error.message}`;
  }
  return error;
}
