import React from 'react';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Highlight,
} from 'react-instantsearch/dom';
import { connectHits } from 'react-instantsearch/connectors';
import { List, ListItem } from './List';

const Hits = ({ hits = [], onAddClick = () => {} }) => (
  <List>
    {hits.map(hit => (
      <ListItem
        key={hit.name}
        title={<Highlight attributeName="name" hit={hit} tagName="mark" />}
        subtitle={'version'}
        buttons={<button onClick={() => onAddClick(hit.name)}>add</button>}
      />
    ))}
  </List>
);

Hits.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      versions: PropTypes.objectOf(PropTypes.string),
    }),
  ),
  onAddClick: PropTypes.func,
};

const ConnectedHits = connectHits(Hits);

const Search = ({ onAddClick }) => (
  <InstantSearch
    appId="OFCNCOG2CU"
    apiKey="f54e21fa3a2a0160595bb058179bfb1e"
    indexName="npm-search"
  >
    <Configure
      attributesToRetrieve={['name', 'versions']}
      attributesToHighlight={['name']}
      hitsPerPage={20}
    />
    <SearchBox />
    <ConnectedHits onAddClick={onAddClick} />
  </InstantSearch>
);

Search.propTypes = {
  onAddClick: PropTypes.func,
};

export default Search;
