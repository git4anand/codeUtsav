@extends('layouts/game')

@section('header')

<link type="text/css" rel="stylesheet" href="/css/font-awesome.css">
    <link type="text/css" rel="stylesheet" href="/css/material-design-iconic-font.css">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="/css/animate.css">
    <link type="text/css" rel="stylesheet" href="/css/layout.css">
    <link type="text/css" rel="stylesheet" href="/css/components.css">
    <link type="text/css" rel="stylesheet" href="/css/widgets.css">
    <link type="text/css" rel="stylesheet" href="/css/plugins.css">
    <link type="text/css" rel="stylesheet" href="/css/pages.css">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-extend.css">
    <link type="text/css" rel="stylesheet" href="/css/common.css">
    <link type="text/css" rel="stylesheet" href="/css/responsive.css">
    <link type="text/css" id="themes" rel="stylesheet" href="#">

     <style>
        .pagination > .active > span {
        background-color: #e97005;
        border-color: #e97005;
    }
        .pagination > .page-item > a {
            color: #e97005;
    }
    </style>

@endsection

@section('content')
<div class="page-header filled full-block light">
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <!-- <h2>Dashboard</h2> -->
            
        </div>
        <div class="col-md-6 col-sm-6">
            <ul class="list-page-breadcrumb">
                <li class="active-page"></li>
                <li><a href="{{ URL::to('admin') }}">Dashboard <i class="zmdi zmdi-chevron-right"></i></a></li>
                <li class="active-page"><a href="{{ URL::to('admin/disease') }}">Disease Statistics</a></li>
            </ul>
        </div>
    </div>
</div>
     
		   
@endsection

@section('script')

<script src="/js/lib/jquery.js"></script>
<script src="/js/lib/jquery-migrate.js"></script>
<script src="/js/lib/bootstrap.js"></script>
<script src="/js/lib/jquery.ui.js"></script>
<script src="/js/lib/jRespond.js"></script>
<script src="/js/lib/nav.accordion.js"></script>
<script src="/js/lib/hover.intent.js"></script>
<script src="/js/lib/hammerjs.js"></script>
<script src="/js/lib/jquery.hammer.js"></script>
<script src="/js/lib/jquery.fitvids.js"></script>
<script src="/js/lib/scrollup.js"></script>
<script src="/js/lib/smoothscroll.js"></script>
<script src="/js/lib/jquery.slimscroll.js"></script>
<script src="/js/lib/jquery.syntaxhighlighter.js"></script>
<script src="/js/lib/velocity.js"></script>
<script src="/js/lib/smart-resize.js"></script>
<script src="/js/lib/select2.full.js"></script>
<!--Tables-->
<script src="js/lib/footable.all.js"></script>

<!--Exportable Data Tables-->
<script src="/js/lib/tableExport.js"></script>
<script src="/js/lib/jquery.base64.js"></script>
<script src="/js/lib/sprintf.js"></script>
<script src="/js/lib/jspdf.js"></script>
<script src="/js/lib/base64.js"></script>

<!--Forms-->
<script src="/js/lib/jquery.maskedinput.js"></script>
<script src="/js/lib/jquery.validate.js"></script>
<script src="/js/lib/jquery.form.js"></script>
<script src="/js/lib/j-forms.js"></script>
<script src="/js/apps.js"></script>

@endsection
 
 
               
               
