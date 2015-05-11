<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div class="page-wrapper">

  <header class="page-header clearfix" role="header">
    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
      </a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="name-and-slogan">
        <?php if ($site_name): ?>
          <!--Modified-->
            <div class="site-name">
              <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
            </div>
          
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div> <!-- /.name-and-slogan -->
    <?php endif; ?>
  </header> <!-- /.page-header -->

  <?php if ($main_menu || $secondary_menu): ?>
    <nav class="page-navigation clearfix" role="navigation">
      <?php //print theme('links__system_main_menu', array(
//        'links' => $main_menu,
//        'attributes' => array(
//          'id' => 'main-menu',
//          'class' => array('links', 'inline', 'clearfix')),
//        ));
      ?>
      <?php print theme('links__system_secondary_menu', array(
        'links' => $secondary_menu,
        'attributes' => array(
          'id' => 'secondary-menu',
          'class' => array('links', 'inline', 'clearfix')),
          'heading' => t('Secondary menu'),
        ));
      ?><?php print render($page['navigation']); ?>
      <?php //print render($page['header']); ?>

      <div id="person-block">
        
        <div class="my-name"><a href="about">Cornel Andreev</a></div>
        <div class="my-logo"><a href="/"><img src="/sites/all/themes/cornel/images/main_logo.png"></a></div>
        <div class="social-buttons">
          <ul>
            <li rel="linked-in"><a target="_blank" title="LinkedIn" href="http://www.linkedin.com/in/cornelandreev/"></a></li>
<!--            <li rel="fb"><a target="_blank"  title="FaceBook" href="https://www.facebook.com/hugronaphor"></a></li>
            <li rel="g-plus"><a target="_blank" title="Google Plus" href="https://plus.google.com/u/0/+CornelAndreev"></a></li>-->
            <li rel="twitter"><a target="_blank" title="Twitter" href="https://twitter.com/hugronaphor"></a></li>
            <li rel="drupal"><a target="_blank" title="Drupal" href="https://www.drupal.org/u/hugronaphor"></a></li>
            <li rel="stackoverflow"><a target="_blank" title="StackOverflow" href="http://stackoverflow.com/users/1600028/cornel-andreev"></a></li>
            <li rel="github"><a target="_blank" title="GitHub" href="https://github.com/hugronaphor"></a></li>
            <li rel="rss"><a target="_blank" title="RSS" href="/rss.xml"></a></li>
          </ul>
        </div>
        
        </div>
      
      
    </nav> <!-- /.page-navigation -->
  <?php endif; ?>

  <?php if ($breadcrumb): ?>
    <div class="breadcrumb-wrapper"><?php //print $breadcrumb; ?></div>
  <?php endif; ?>  

  <div class="main-wrapper" role="main">
    <?php print $messages; ?>
    <?php if (isset($is_panel_page) && $is_panel_page): ?>
      <section class="page-content panel-page-content">
    <?php else: ?>
      <section class="page-content">
    <?php endif; ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <header class="page-content-header">
          <h1 class="page-title" id="page-title">
            <?php print $title; ?>
          </h1>
        </header>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php if ($tabs): ?>
        <div class="tabs" role="tablist">
          <?php print render($tabs); ?>
        </div>
      <?php endif; ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links" role="list">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </section>
  </div>

  <section class="footer" role="footer">
    <?php print render($page['footer']); ?>
  </section>

</div> <!-- /.page-wrapper -->
