'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var genreCtrlStub = {
  index: 'genreCtrl.index',
  show: 'genreCtrl.show',
  create: 'genreCtrl.create',
  update: 'genreCtrl.update',
  destroy: 'genreCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var genreIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './genre.controller': genreCtrlStub
});

describe('Genre API Router:', function() {

  it('should return an express router instance', function() {
    expect(genreIndex).to.equal(routerStub);
  });

  describe('GET /api/genres', function() {

    it('should route to genre.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'genreCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/genres/:id', function() {

    it('should route to genre.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'genreCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/genres', function() {

    it('should route to genre.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'genreCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/genres/:id', function() {

    it('should route to genre.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'genreCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/genres/:id', function() {

    it('should route to genre.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'genreCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/genres/:id', function() {

    it('should route to genre.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'genreCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
