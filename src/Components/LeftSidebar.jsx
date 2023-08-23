import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';
import { dummydata } from './dummydata';
import { Outlet,NavLink } from 'react-router-dom';

function LeftSidebar() {
  const [allConversations, setAllConversations] = useState(dummydata);
  const [filteredConversations, setFilteredConversations] = useState(allConversations);

  const handleSearch = (searchTerm) => {
    const filtered = allConversations.filter((conv) =>
      conv.contactName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredConversations(filtered);
  };

  return (

<div className="LeftSidebar">
  <SearchBar onSearch={handleSearch} className="SearchBar" />
  <ul className="ConversationList">
    {filteredConversations.map((conv, index) => (
      <NavLink
        key={`${conv.id}-${index}`}
        to={`/chat/${conv.id}`}
        className="ConversationItem"
        activeClassName="active"
      >
        <li>
          <p className="ConversationName">{conv.contactName}</p>
          <p className="LastMessage">
            {conv.messages.length ? conv.messages[conv.messages.length - 1].text : 'No messages'}
          </p>
        </li>
      </NavLink>
    ))}
  </ul>
  <Outlet />
</div>

  );
}

export default LeftSidebar;
