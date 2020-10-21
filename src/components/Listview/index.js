import React from 'react';
import {
  Container,
  Box,
  Body,
  Title,
  Text,
  Image,
  Button
} from './styles/listview';

export default function Listview({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

function ListviewContainer({ children }) {
  return(
    <Box>
      {children}
    </Box>
  );
}

function ListviewBody({ children }) {
  return(
    <Body>
      {children}
    </Body>
  );
}

function ListviewTitle({ children }) {
  return(
    <Title>
      {children}
    </Title>
  );
}

function ListviewText({ children }) {
  return(
    <Text>
      {children}
    </Text>
  );
}

function ListviewImage({ src, alt }) {
  return(
    <Image
      src={src}
      alt={alt}
    />
  );
}

function ListviewButton({ children }) {
  return(
    <Button
      type="button"
    >
      {children}
    </Button>
  );
}

Listview.Container = ListviewContainer;
Listview.Body = ListviewBody;
Listview.Title = ListviewTitle;
Listview.Text = ListviewText;
Listview.Image = ListviewImage;
Listview.Button = ListviewButton;