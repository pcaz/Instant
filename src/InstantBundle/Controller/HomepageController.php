<?php

namespace InstantBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        
        return $this->render('InstantBundle:Default:index.html.twig');
    }
}
