<?php
/**
 * Plugin Name: Gutenberg Section Block
 * Plugin URI: https://github.com/vincevannoort/gutenberg-section-block
 * Description: Section block — is a Gutenberg plugin created via create-guten-block, based on: https://github.com/marcusig/gutenberg-section-block.
 * Author: Vince van Noort
 * Version: 1.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
