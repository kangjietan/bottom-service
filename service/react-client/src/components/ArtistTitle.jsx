import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArtistTitle = ({ artist, title }) => (
  <Container>
    <Artist>{artist}</Artist>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const Artist = styled.div`
  color: #999;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 11px;
  color: #666;
  cursor: pointer;
`;

ArtistTitle.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArtistTitle;
