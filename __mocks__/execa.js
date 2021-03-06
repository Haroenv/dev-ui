const mockStream = () => ({
  once: jest.fn(),
  on: jest.fn(),
  removeListener: jest.fn(),
  pipe: jest.fn(),
});

const mockExeca = jest.fn().mockReturnValue({
  stdout: mockStream(),
  stderr: mockStream(),
  kill: () => {},
});

module.exports = mockExeca;
