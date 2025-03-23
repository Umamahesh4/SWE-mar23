import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherMap from '../WeatherMap';

// Mock the Leaflet map since it requires browser environment
jest.mock('react-leaflet', () => ({
  MapContainer: jest.fn().mockImplementation(({ children }) => (
    <div data-testid="map-container">{children}</div>
  )),
  TileLayer: jest.fn().mockImplementation(() => <div data-testid="tile-layer" />),
  Marker: jest.fn().mockImplementation(() => <div data-testid="marker" />),
  Popup: jest.fn().mockImplementation(({ children }) => (
    <div data-testid="popup">{children}</div>
  )),
}));

describe('WeatherMap Component', () => {
  test('renders map container', () => {
    render(<WeatherMap />);
    const mapContainer = screen.getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();
  });

  test('renders tile layer', () => {
    render(<WeatherMap />);
    const tileLayer = screen.getByTestId('tile-layer');
    expect(tileLayer).toBeInTheDocument();
  });
});
