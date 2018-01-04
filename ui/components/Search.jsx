import React from 'react';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Hits,
} from 'react-instantsearch/dom';

const Hit = ({ hit: { name } }) => <div>{name}</div>;

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
