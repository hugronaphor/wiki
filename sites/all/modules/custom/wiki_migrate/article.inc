<?php

/*
 * @file
 * Migration of Article
 */

class AritcleMigration extends DynamicMigration {

  public function __construct() {
    //module_load_include('inc', 'link', 'link.migrate');
    parent::__construct();
    $this->team = array(
      new MigrateTeamMember('Cornel Andreev', 'hugronaphor@gmail.com', t('Developer')),
    );
    $this->description = t('Article');
    $this->map = new MigrateSQLMap($this->machineName, array('nid' => array(
        'type' => 'int',
        'not null' => TRUE,
        'description' => 'Article id.',
        'alias' => 'n'
      )
      ), MigrateDestinationNode::getKeySchema()
    );

    $query = Database::getConnection('default', 'wikimig')
      ->select('node', 'n')
      ->fields('n')
      ->condition('type', array('article',), 'IN')
      ->condition('type', array(151), 'NOT IN');

    $count_query = Database::getConnection('default', 'wikimig')
      ->select('node', 'n');
    $count_query->addExpression('COUNT(nid)', 'cnt');

    $this->source = new MigrateSourceSQL($query, array(), $count_query, array('map_joinable' => FALSE));
    $this->destination = new MigrateDestinationNode('article');

    // Mapped fields
    $this->addFieldMapping('title', 'title');
    $this->addFieldMapping('language', 'language')
      ->defaultValue('en');

    $this->addFieldMapping('created', 'created');
    $this->addFieldMapping('changed', 'changed');

    $this->addFieldMapping('body', 'theBodyFieldValue');
    $this->addFieldMapping('body:format')->defaultValue('code');

    $this->addFieldMapping('status')->defaultValue(NODE_NOT_PUBLISHED);
    //$this->addFieldMapping('status')->defaultValue(1);

    return;
  }

  public function prepareRow($row) {
    $body = Database::getConnection('default', 'wikimig')
      ->select('field_data_body', 'b')
      ->fields('b')
      ->condition('entity_id', $row->nid, '=')
      ->execute()
      ->fetchObject();

    if (isset($body->body_value)) {
      $row->theBodyFieldValue = $body->body_value;
    }
  }

}
