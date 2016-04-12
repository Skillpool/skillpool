/**
 * Genre model events
 */

'use strict';

import {EventEmitter} from 'events';
var Genre = require('../../sqldb').Genre;
var GenreEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GenreEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Genre.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    GenreEvents.emit(event + ':' + doc._id, doc);
    GenreEvents.emit(event, doc);
    done(null);
  }
}

export default GenreEvents;
