'use strict';

var objectProxy = {
  getOwnPropertyNames: function getPropertiesOfProxiedObject(target) {
    return Object.keys(target.schema.properties);
  },
  
  defineProperty : function definePropertyOfProxiedObject() {
    throw new Error('You cannot add properties to a document directly.');
  },
    
  deleteProperty : function deletePropertiesOfProxiedObject(target, name) {
    return target.deleteProperty(name);
  },
  
  has: function propertyInProxiedObject(target, name) {
    return (name in target.schema.properties);
  },
  
  hasOwn: function ownPropetyInProxiedObject(target, name) {
    return (name in target.schema.properties);
  },
  
  get: function getPropertyOfProxiedObject(target, name) {
    return target.get(name);
  },
  
  set: function setPropertyOfProxiedObject(target, name, value) {
    target.set(name, value);
  },
  
  enumerate: function enumerateProxiedObjectProperties(target) {
    var keys = Object.keys(target.schema.properties);
    var index = 0;
   
    return {
      next : function next() {
        if (index === keys.length) {
          throw StopIteration;
        }

        return keys[index++];
      }
    };
  },

  keys: function getKeysOfProxiedObject(target) {
    return Object.keys(target.schema.properties);
  }
  
};

module.exports = objectProxy;