const express = require ('express');
const Celebrity = require ('../models/celebrities');
const router = express.Router();

 router.get('/', (req,res,next) => {
   Celebrity.find({} , (err, celebrity) => {
   if (err) {return next(err)}
   res.render('celebrities/index', { celebrity:celebrity
   });
 });
});


module.exports =router;

router.get('/:id', (req,res,next)=> {
  const celebrityId=req.query.id;

  Celebrity.findOne(celebrityId, (err, celebrity) => {
    if(err) {return next (err)}
    res.render('celebrities/show', {celebrity:celebrity
    });
  });
});
router.post('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
        };
  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
        if (err){ return next(err); }
        return res.redirect('/celebrities');
      });

});
