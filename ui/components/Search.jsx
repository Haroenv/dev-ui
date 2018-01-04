import React from 'react';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Hits,
} from 'react-instantsearch/dom';

const Hit = ({ hit: { name } }) => <div>{name}</div>;

Hit.propTypes = {
  hit: {
    name: PropTypes.string,
  },
};

const Search = () => (
  <InstantSearch
    appId="OFCNCOG2CU"
    apiKey="f54e21fa3a2a0160595bb058179bfb1e"
    indexName="npm-search"
  >
    <Configure attributesToRetrieve={['name']} hitsPerPage={20} />
    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

export default Search;
