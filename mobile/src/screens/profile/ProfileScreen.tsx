import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../theme/colors';
import { Button } from '../../components/Button';

export const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const menuItems = [
    { label: 'Edit Profile', icon: '✏️', onPress: () => {} },
    { label: 'Saved Addresses', icon: '📍', onPress: () => {} },
    { label: 'Booking History', icon: '📋', onPress: () => {} },
    { label: 'Support & Feedback', icon: '💬', onPress: () => {} },
    { label: 'Settings', icon: '⚙️', onPress: () => {} },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.light }}
      contentContainerStyle={{ paddingBottom: spacing.xl }}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: colors.primary,
          padding: spacing.lg,
          paddingVertical: spacing.xl,
          alignItems: 'center',
          gap: spacing.md,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 48 }}>👤</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              fontFamily: 'Poppins-Bold',
              color: colors.light,
              marginBottom: spacing.xs,
            }}
          >
            John Doe
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'Inter-Regular',
            }}
          >
            +91 98765 43210
          </Text>
        </View>
      </View>

      {/* Stats */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.lg,
          gap: spacing.md,
        }}
      >
        {[
          { label: '5', value: 'Bookings' },
          { label: '₹12,250', value: 'Spent' },
          { label: '4.8', value: 'Rating' },
        ].map((stat, idx) => (
          <View
            key={idx}
            style={{
              flex: 1,
              backgroundColor: colors.lightGray,
              borderRadius: borderRadius.lg,
              padding: spacing.md,
              alignItems: 'center',
              ...shadows.sm,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                fontFamily: 'Poppins-Bold',
                color: colors.primary,
                marginBottom: spacing.xs,
              }}
            >
              {stat.label}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                fontFamily: 'Inter-Regular',
              }}
            >
              {stat.value}
            </Text>
          </View>
        ))}
      </View>

      {/* Menu Items */}
      <View style={{ paddingHorizontal: spacing.lg }}>
        {menuItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={item.onPress}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing.md,
              paddingVertical: spacing.lg,
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <Text style={{ fontSize: 24 }}>{item.icon}</Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontFamily: 'Inter-Medium',
                color: colors.textPrimary,
              }}
            >
              {item.label}
            </Text>
            <Text style={{ fontSize: 18, color: colors.textSecondary }}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
          variant="outline"
          size="large"
        />
      </View>
    </ScrollView>
  );
};
