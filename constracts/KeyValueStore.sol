// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

interface MetaStore {
    function addMeta(uint256 tokenId, string calldata _sheetName) external;
}

contract KeyValueStore is ERC721URIStorage {
    // Each ERC721 token is a key to access the k-v sheet
    mapping(uint256 => mapping(string => string)) private keyValueStore;
    uint256 private tokenIdCounter;

    // Owner can set metaStoreAddress and baseTokenURI
    address private metaStoreAddress;
    address private owner;
    string private baseTokenURI;
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    // set `baseURI` (only owner)
    // the URI of each token is `baseURL + metaId`
    // When update `baseURI`, old tokens will not modify their URI
    function updateBaseURI(string memory newBaseURI) public onlyOwner {
        baseTokenURI = newBaseURI;
    }
    function resetMetaStoreAddress(address _newAddress) public  onlyOwner {
        metaStoreAddress = _newAddress;
    }

    constructor(string memory _baseTokenURI, address _metaStoreAddress) payable
        ERC721("AstralMaskStore", "AMS") {
            owner = msg.sender;
            updateBaseURI(_baseTokenURI);
            metaStoreAddress = _metaStoreAddress;
    }

    // create a sheet and mint a ERC720 token
    function newSheet(string memory sheetName) public returns (uint256) {
        uint256 newTokenId = tokenIdCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, string(abi.encodePacked(baseTokenURI, newTokenId)));
        MetaStore metaStore = MetaStore(metaStoreAddress);
        metaStore.addMeta(newTokenId, sheetName);
        tokenIdCounter++;
        return tokenIdCounter - 1;
    }

    function setKeyValue(uint256 tokenId, string memory key, string memory value) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the token");
        keyValueStore[tokenId][key] = value;
    }

    function getKeyValue(uint256 tokenId, string memory key) public view returns (string memory) {
        return keyValueStore[tokenId][key];
    }

    function deleteKeyValue(uint256 tokenId, string memory key) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the token");
        delete keyValueStore[tokenId][key];
    }
}