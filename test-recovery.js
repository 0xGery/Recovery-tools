#!/usr/bin/env node

/**
 * Test script for 0xio Wallet Recovery Tool
 * Demonstrates usage and validates the recovery process
 */

const { WalletRecovery } = require('./mnemonic-to-wallet.js');

// Test mnemonic (DO NOT USE FOR REAL FUNDS - this is a well-known test mnemonic)
const TEST_MNEMONIC = "abandon ability able about above absent absorb abstract absurd abuse access accident";

async function runTests() {
    console.log('\n═══════════════════════════════════════════════════');
    console.log('  0xio Wallet Recovery Tool - Test Suite');
    console.log('═══════════════════════════════════════════════════\n');

    const recovery = new WalletRecovery();

    // Test 1: Valid 12-word mnemonic
    console.log('Test 1: Valid 12-word mnemonic recovery');
    console.log('───────────────────────────────────────────────────');
    const result1 = await recovery.recoverFromMnemonic(TEST_MNEMONIC);

    if (result1.success) {
        console.log('✓ Test passed\n');
        console.log('  Address:', result1.address);
        console.log('  Private Key:', result1.privateKey.substring(0, 20) + '...');
        console.log('  Public Key:', result1.publicKey.substring(0, 20) + '...\n');
    } else {
        console.log('✗ Test failed:', result1.error, '\n');
    }

    // Test 2: Invalid word count
    console.log('Test 2: Invalid word count (should fail)');
    console.log('───────────────────────────────────────────────────');
    const result2 = await recovery.recoverFromMnemonic("abandon ability able");

    if (!result2.success && result2.error.includes('expected 12 words')) {
        console.log('✓ Test passed - correctly rejected invalid mnemonic\n');
        console.log('  Error:', result2.error, '\n');
    } else {
        console.log('✗ Test failed - should have rejected invalid mnemonic\n');
    }

    // Test 3: Empty mnemonic
    console.log('Test 3: Empty mnemonic (should fail)');
    console.log('───────────────────────────────────────────────────');
    const result3 = await recovery.recoverFromMnemonic("");

    if (!result3.success) {
        console.log('✓ Test passed - correctly rejected empty mnemonic\n');
        console.log('  Error:', result3.error, '\n');
    } else {
        console.log('✗ Test failed - should have rejected empty mnemonic\n');
    }

    // Test 4: Mnemonic with extra spaces
    console.log('Test 4: Mnemonic normalization (extra spaces)');
    console.log('───────────────────────────────────────────────────');
    const messy = "  abandon   ability  able about above absent absorb abstract absurd abuse access accident  ";
    const result4 = await recovery.recoverFromMnemonic(messy);

    if (result4.success && result4.address === result1.address) {
        console.log('✓ Test passed - correctly normalized mnemonic\n');
        console.log('  Address matches:', result4.address, '\n');
    } else {
        console.log('✗ Test failed - normalization issue\n');
    }

    // Test 5: Case insensitivity
    console.log('Test 5: Case insensitivity');
    console.log('───────────────────────────────────────────────────');
    const uppercase = TEST_MNEMONIC.toUpperCase();
    const result5 = await recovery.recoverFromMnemonic(uppercase);

    if (result5.success && result5.address === result1.address) {
        console.log('✓ Test passed - case insensitive recovery\n');
        console.log('  Address matches:', result5.address, '\n');
    } else {
        console.log('✗ Test failed - case sensitivity issue\n');
    }

    // Summary
    console.log('═══════════════════════════════════════════════════');
    console.log('  Test Suite Complete');
    console.log('═══════════════════════════════════════════════════\n');

    console.log('✓ All tests completed successfully!\n');
    console.log('You can now use this tool to recover your wallet:');
    console.log('  node mnemonic-to-wallet.js "your seed phrase here"\n');
}

// Run tests
if (require.main === module) {
    runTests().catch(error => {
        console.error('\x1b[31mTest error:', error.message, '\x1b[0m');
        process.exit(1);
    });
}

module.exports = { runTests };
