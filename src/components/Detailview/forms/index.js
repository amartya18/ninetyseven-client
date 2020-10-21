import React from 'react';
import SpecificationF from './Specification';
import Trim from './Trim';
import Option from './Option';
import Success from './Success';

export function SpecificationI({ ...restProps }) {

  return (
    <SpecificationF {...restProps} />
  );
}

export function TrimI({ ...restProps }) {
  return (
    <Trim {...restProps} />
  );
}

export function OptionI({ ...restProps }) {
  return (
    <Option {...restProps} />
  );
}

export function SuccessI({ ...restProps }) {
  return (
    <Success {...restProps} />
  );
}