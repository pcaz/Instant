<?php

namespace InstantBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomepageController extends Controller
{
    public function indexAction()
    {
        
        return $this->render('InstantBundle::homepage.html.twig');
    }
}
