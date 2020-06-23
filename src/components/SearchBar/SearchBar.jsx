import React, { useState } from 'react';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const SearchForm = styled.form`
  top: ${({ showResult }) => (showResult ? '0%' : '30%')};
  transition: 0.8s 0.5s;
`;

const TransparentPaper = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.2);
  margin: 2em;
`;

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = props => {
  const classes = useStyles();

  const [cityName, setCityName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.handleSubmit(cityName);
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <TransparentPaper component='form' className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Search City'
          inputProps={{ 'aria-label': 'search city' }}
          onChange={e => setCityName(e.target.value)}
        />
        <Divider className={classes.divider} orientation='vertical' />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </TransparentPaper>
    </SearchForm>
  );
};

export default SearchBar;
