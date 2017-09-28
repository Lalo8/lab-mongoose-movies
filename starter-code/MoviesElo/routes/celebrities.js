const express = require ('express');
const Celebrity = require ('../models/celebrities');
const router = express.Router();

 router.get('/', (req,res,next) => {
   Celebrity.find({} , (err, celebrities) => {
   if (err) {return next(err)}
   res.render('celebrities/index', { celebrities:celebrities
   });
 });
});

router.get ('/new', (req,res,next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const celebrity = new Celebrity ({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });
  celebrity.save((err,drone) => {
  if (err){ res.redirect('celebrities/new'); }
    res.redirect('index');
      });
});



router.get('/:id', (req,res,next)=> {
  const celebrityId=req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if(err) {return next (err)}
    res.render('celebrities/show', {celebrity:celebrity
    });
  });

});

module.exports =router;
