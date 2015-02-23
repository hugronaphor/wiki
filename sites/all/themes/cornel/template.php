<?php

/**
 * @file
 * Write your theme logic here.
 */

/**
 * Implement THEME_menu_link_MENU_NAME()
 *
 * Override html class for Main Menu links.
 * 
 * @todo: suggest the hook.
 */
function cornel_menu_link__main_menu($link) {
//dsm($link['element']['#title']);
  switch ($link['element']['#title']) {
    case 'Code Snippets':

      // Detect review and canonical_car_review node types.
      if (arg(0) == 'node' && is_numeric(arg(1))) {
        $node = node_load(arg(1));

        if (in_array($node->type, array('article'))) {
          return _cornel_theme_attach_active_class($link);
        }
      }

      break;
  }

  return theme_menu_link($link);
}

function _cornel_theme_attach_active_class($link) {
  $link['element']['#original_link']['in_active_trail'] = TRUE;
  $link['element']['#localized_options']['attributes']['class'][] = 'active-trail';
  $link['element']['#localized_options']['attributes']['class'][] = 'active';
  $link['element']['#attributes']['class'][] = 'active-trail';
  return theme_menu_link($link);
}
