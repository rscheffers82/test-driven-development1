import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect( action.type ).to.equal( SAVE_COMMENT );
    });

    it('has the correct payload', () => {
      const comment = 'Comment no 1.';
      const action = saveComment(comment);
      expect ( action.payload ).to.equal( comment );
    });
  });
});
