/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/genres              ->  index
 * POST    /api/genres              ->  create
 * GET     /api/genres/:id          ->  show
 * PUT     /api/genres/:id          ->  update
 * DELETE  /api/genres/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import {Genre} from '../../sqldb';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Genres
export function index(req, res) {
  return Genre.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Genre from the DB
export function show(req, res) {
  return Genre.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Genre in the DB
export function create(req, res) {
  return Genre.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Genre in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Genre.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Genre from the DB
export function destroy(req, res) {
  return Genre.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
