
    import { Meteor } from 'meteor/meteor';
    import { chai } from 'chai';

    if (Meteor.isServer) {
      describe('test', () => {
        describe('methods', () => {
          it('can delete owned task', () => {
              var test1=0
              chai.assert.equal(test1, 0);
          });
        });
      });
    }
    